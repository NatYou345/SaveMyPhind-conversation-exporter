require('fs').writeFileSync('licenseList.md', "# Libraries licenses\n" + require('fs').readFileSync('licenseList.md', 'utf8').split('\n').slice(3).join('\n'))