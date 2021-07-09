const { importCsv } = require('src/register/csvAsTable/importCsv');
import { shallow, configure } from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import * as csv from './test.csv';

configure({ adapter: new Adapter() });

class FileReaderMock {
    DONE = FileReader.DONE;
    EMPTY = FileReader.EMPTY;
    LOADING = FileReader.LOADING;
    readyState = 0;
    error: FileReader['error'] = null;
    result: FileReader['result'] = null;
    abort = jest.fn();
    addEventListener = jest.fn();
    dispatchEvent = jest.fn();
    onabort = jest.fn();
    onerror = jest.fn();
    onload = jest.fn();
    onloadend = jest.fn();
    onloadprogress = jest.fn();
    onloadstart = jest.fn();
    onprogress = jest.fn();
    readAsArrayBuffer = jest.fn();
    readAsBinaryString = jest.fn();
    readAsDataURL = jest.fn();
    readAsText = jest.fn();
    removeEventListener = jest.fn();
}

describe('readFile', () => {
    const fileReader = new FileReaderMock();
    jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);
    let file = jest.mock(csv);
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should resolve file as data URL', async () => {
      fileReader.result = 'abc,bcd,cde';
      fileReader.addEventListener.mockImplementation((_, fn) => fn());
  
      const content = await importCsv(file);
      console.info('content==', content);
      expect(content).toBe('abc,bcd,cde');
      expect(fileReader.readAsText).toHaveBeenCalledTimes(1);
      expect(fileReader.readAsText).toHaveBeenCalledWith(file);
    });
  });