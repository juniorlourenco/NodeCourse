const path = require('path');

console.log('basename',path.basename('C:\\temp\\arquivo.html'));
console.log('normalize', path.normalize('C:\\temp/dir//subdir/dir/..'));
console.log('join path:', path.join('/teste', 'teste2', 'teste3', 'teste4', 'dir2','..'));
console.log('resolve:', path.resolve('path2.js'));
console.log('extension:', path.extname('path2.js'));