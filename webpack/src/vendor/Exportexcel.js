/*
 * @Author: PC
 * @Date: 2021-12-29 11:13:29
 * @LastEditTime: 2022-02-09 14:31:05
 * @Description: Export2Excel.js
 */
require("script-loader!file-saver");
require("./Blob"); //引用当前目录下的Blob.js模块
require("script-loader!xlsx-style/dist/xlsx.full.min");

function datenum(v, date1904) {
  if (date1904) v += 1462;
  var epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
  var ws = {};
  var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      var cell = { v: data[R][C] };
      if (cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

      if (typeof cell.v === "number") cell.t = "n";
      else if (typeof cell.v === "boolean") cell.t = "b";
      else if (cell.v instanceof Date) {
        cell.t = "n";
        cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      } else cell.t = "s";

      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws["!ref"] = XLSX.utils.encode_range(range);
  return ws;
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

// 导出表格
export async function exportTableExcel(params) {
  let { columns = [], dataSource, mergeList, fileName, autoWidth = true } = params;

  for (let i = columns.length - 1; i > -1; i--) {
    dataSource.unshift(columns[i]);
  }

  var ws_name = "Sheet1";
  var wb = new Workbook();
  var ws = await sheet_from_array_of_arrays(dataSource);

  // 设置自适应单元格宽度--默认开启
  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = dataSource.map((row) =>
      row.map((val) => {
        const isCNLang = val && val.toString().charCodeAt(0) > 255 ? true : false; /*判断是否为中文*/
        const valLength = val ? val.toString().length : 0; //值的字符长度
        const CNValLength = valLength >= 20 ? 40 : valLength * 2; //中文的长度--一行最多20个字符
        const otherValLength = valLength >= 20 ? 20 : valLength; //其他文字的长度--一行最多20个字符
        const width = !val ? 10 : isCNLang ? CNValLength : otherValLength; //单元格宽度
        return {
          wch: width, //单元格宽度
        };
      })
    );
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]["wch"] < colWidth[i][j]["wch"]) {
          result[j]["wch"] = colWidth[i][j]["wch"];
        }
      }
    }
    ws["!cols"] = result;
  }

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  // 合并单元格
  let merges = [];
  mergeList.forEach((item) => {
    merges.push(XLSX.utils.decode_range(item));
  });
  ws["!merges"] = merges;

  // 设置表格数据样式
  const dataInfo = wb.Sheets[wb.SheetNames[0]];
  let style = {
    alignment: {
      horizontal: "center", //水平居中
      vertical: "center", //垂直居中
      wrapText: true, //自动换行
    },
    font: {
      name: "宋体",
    },
  };
  for (let key in dataInfo) {
    const barringKey = ["!cols", "!merges", "!ref"];
    if (barringKey.indexOf(key) == -1) {
      dataInfo[key].s = style;
    }
  }
  wb.Sheets[wb.SheetNames[0]] = dataInfo;

  const wbout = await XLSX.write(wb, { bookType: "xlsx", bookSST: false, type: "binary" });

  saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), fileName + ".xlsx");
}
