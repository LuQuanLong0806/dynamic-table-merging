/*!
 * build.js —— 把 配置页面.html 打包到 table-config/ 目录
 *
 * 用法：npm run build
 *
 * 配置页面.html 是完全自包含的（Vue/iview 走 CDN，DTUtils 内联），
 * 部署时只需要把 table-config/ 整个文件夹上传到服务器静态目录即可。
 */
var fs = require('fs');
var path = require('path');

var ROOT = __dirname;
var SRC = path.join(ROOT, '配置页面.html');
var OUT_DIR = path.join(ROOT, 'table-config');
var OUT = path.join(OUT_DIR, 'index.html');

if (!fs.existsSync(SRC)) {
  console.error('✗ 找不到源文件：' + SRC);
  process.exit(1);
}

// 清空旧产物，重建空目录
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUT_DIR, { recursive: true });

// 复制（保留 UTF-8 编码）
var html = fs.readFileSync(SRC, 'utf8');
fs.writeFileSync(OUT, html, 'utf8');

// 写一个简单的部署说明
fs.writeFileSync(
  path.join(OUT_DIR, 'README.md'),
  [
    '# table-config',
    '',
    '此目录由 `npm run build` 自动生成，**不要手动编辑**。',
    '',
    '## 部署',
    '',
    '把整个 `table-config/` 文件夹上传到服务器静态资源目录，访问 `index.html` 即可。',
    '',
    '前置依赖（CDN 加载，服务器需要外网访问）：',
    '- Vue 2.7.16',
    '- view-design 4.7.0',
    '',
    '## 重新构建',
    '',
    '```bash',
    'npm run build',
    '```',
    ''
  ].join('\n'),
  'utf8'
);

var sizeKB = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
console.log('✓ 构建完成');
console.log('  源文件：配置页面.html (' + sizeKB + ' KB)');
console.log('  产物：  table-config/index.html');
console.log('  部署：  把 table-config/ 上传到服务器静态目录');
