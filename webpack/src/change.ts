import fs from 'fs/promises'
import path from 'path'
fs.rename(path.resolve(__dirname, 'wocao.js'), path.resolve(__dirname, 'b.js'))