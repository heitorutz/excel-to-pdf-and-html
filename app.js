const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HtmlParser = require('./classes/HtmlParser');
const Writer = require('./classes/Writer');
const PDFWriter = require('./classes/PDFWriter');
const reader = new Reader();
const writer = new Writer();


(async () => {
  const data = await reader.read('./test.csv');
  
  const process = Processor.process(data);
  const users = new Table(process);
  const html = await HtmlParser.parser(users);

  writer.write(`${Date.now()}.html`, html);
  PDFWriter.writePDF(`${Date.now()}.PDF`, html);
})();

