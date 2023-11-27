import { EventEmitter } from 'events';
import { readFile } from 'fs';

function findRegex(files, regex) {
  const emitter = new EventEmitter();
  for (const file of files) {
    readFile(file, "utf8", (_error, content) => {
      if (_error) {
        return emitter.emit("error", _error);
      }

      emitter.emit("Fileread", file);

      const match = content.match(regex);

      if (match) {
        match.forEach(e => emitter.emit("found", file, e));
      }
    })
  }
  return emitter;
}