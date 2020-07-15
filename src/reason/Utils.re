// https://stackoverflow.com/a/680982/1570165

module R = Js.Re;
module O = Belt.Option;

let extFromFilename = filename => {
  "/(?:\\.([^.]+))?$/"
  ->R.fromString
  ->R.exec_(filename)
  ->O.flatMap(result => Js.Nullable.toOption(R.captures(result)[1]))
  ->O.getWithDefault("txt");
};
