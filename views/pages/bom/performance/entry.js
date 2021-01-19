window.addEventListener('load', () => {
  setTimeout(
    () => {
      const entries = performance.getEntries();

      // entryType(entry的class类型)
      // navigation mark resource

      // initiatorType(发起者)
      // fetch xmlhttprequest
      // script
      // link
      // style 样式表中由url发起
      console.log(entries);

      // duration = loadEventEnd - startTime

      // startTime
      // redirectStart
      // redirectEnd
      // fetchStart
      // domainLookupStart
      // domainLookupEnd
      // connectStart
      // connectEnd
      // secureConnectionStart
      // requestStart
      // responseStart
      // responseEnd
      // unloadEventStart
      // unloadEventEnd
      // domInteractive
      // domContentLoadedEventStart
      // domContentLoadedEventEnd
      // domComplete
      // loadEventStart
      // loadEventEnd
      const [navigationPerf] = performance.getEntriesByType('navigation');

      let keys = [];
      for (const key in navigationPerf) {
        if (typeof navigationPerf[key] === 'number') {
          keys.push(key);
        }
      }
      keys = keys
        .sort((key1, key2) => {
          return navigationPerf[key1] - navigationPerf[key2]
        });

      for (const key of keys) {
        console.log(
          `${key}: ${navigationPerf[key]}`
        );
      }
    },
    1000
  );
});