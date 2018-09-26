var convert = require('xml-js');
var xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<book>' +
    '<chapter xml:id="s1">'+
    '<title xml:id="p2" annotations="font_size:21pt" role="align_both">《上海府縣舊志叢書》出版</title>' +'<para xml:id="p3">編輯出版《上海府縣舊志叢書》，醖釀、籌備於2004年，啓動於2007年，是繼上海市地方志辦公室圓滿完成《上海鄉鎮舊志叢書》的整理出版以後，開展的又一項大規模的舊志整理工作。這也是上海地方志系統在市委、市政府領導下，依靠包括學術界在内的社會各界的力量，進一步開展保護、開發、利用方志古籍重要工作的項目之一。</para>' +'<para xml:id="p4">存史、資政、教化，是爲志書的基本功能。作爲一種文獻載體，一個地區不同時期的方志，記錄了這個地區不同時期的疆域變遷、行政沿革、經濟狀況、人文傳統、民風習俗，可謂林林總總，蔚為大觀，從而相對完整地構成了這個地區的歷史面貌。上海的行政轄區，歷史上有過多次變化，每一次變化，都與其社會發展規模的不斷擴大、社會影響的不斷深廣密切相關。上古之世，上海初具雛形，被譽為“方志之祖”的《越絕書》便對這片土地上的狀況有所描述。兩漢以降，散見於江南發達地區志書中的上海史料漸多。到了唐宋時期，上海依託華亭縣而發展，史載曾有獨立志書問世，惜今已不存。南宋紹熙年間所修的《雲間志》，大約是目前所知現存的上海地區最早的志書了。至於元明而到清代、民國，上海地區迅速發展，往往多則數十上百年，少則十餘載，便有一次較爲正規的志書編纂活動，由此積累的上海地區的發展史料，更具規模，更爲系統。這些志書，除大部分鄉鎮志和一部分專志爲私人編纂外，絕大多數均屬官修，資料來源大都可靠翔實，體例格式也多完備合理。</para>'+'<para xml:id="p5">時至今日，中國共產黨所領導的新中國成立六十年間，特别是改革開放三十年以來，上海的行政轄區已逐步擴大到六千三百四十多平方公里，從近代中國最大的工商都會，發展成爲當今中國改革開放的重要門户，其所發生的巨大變化，用日新月異來形容似不爲過。但是，歷史的理性告訴我們，傳統，始終是社會發展的基石，文明，必定是人類進步的象徵。上海方志舊籍的歷史，同樣可以向今人揭示這一真諦。</para>'+'</chapter>'+'</book>';
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);
// var convert = require('xml-js');
// var xml = require('fs').readFileSync('books.xml', 'utf8');
// var options = {ignoreComment: true, alwaysChildren: true};
// var result = convert.xml2json(xml, options); // or convert.xml2json(xml, options)
// console.log(result);
