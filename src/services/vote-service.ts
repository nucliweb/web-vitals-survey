import path from "path";
import fs from "fs";

export enum VoteKey {
  cls = "cls",
  inp = "inp",
  lcp = "lcp",
}

const INIT_VALUES = { lcp: 0, inp: 0, cls: 0 };

const FILE_PATH = path.resolve(path.join(process.cwd(), "public", "votes.json"));

export class VoteService {
  create(key: VoteKey) {
    const votes = this.fetchAll();

    fs.writeFileSync(
      FILE_PATH,
      JSON.stringify({
        ...votes,
        [key]: votes[key] + 1,
      }),
      {
        flag: "w",
      },
    );
  }

  fetchAll() {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
  }

  reset() {
    try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(INIT_VALUES), {
        flag: "w",
      });
      return true;
    } catch {
      return false;
    }
  }
}
