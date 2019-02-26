var fs = require('fs');
var xml2js = require('xml-js');
var parseString = xml2js.parseString;
var xml = '<?xml version="1.0" encoding="UTF-8" ?><para xml:id="p3">編輯出版《上海府縣舊志叢書》，醖釀、籌備於2004年，啓動於2007年，是繼上海市地方志辦公室圓滿完成《上海鄉鎮舊志叢書》的整理出版以後，開展的又一項大規模的舊志整理工作。這也是上海地方志系統在市委、市政府領導下，依靠包括學術界在内的社會各界的力量，進一步開展保護、開發、利用方志古籍重要工作的項目之一。</para>';
parseString(xml, function (err, result) {
    console.dir(JSON.stringify(result));
});
