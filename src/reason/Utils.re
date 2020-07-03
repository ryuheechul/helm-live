// https://stackoverflow.com/a/680982/1570165
let extFromFilename = filename => {
  "/(?:\\.([^.]+))?$/"
  ->Js.Re.fromString
  ->Js.Re.exec_(filename)
  ->(
      fun
      | Some(result) => Js.Nullable.toOption(Js.Re.captures(result)[1])
      | None => None
    )
  ->Belt.Option.getWithDefault("txt");
};
