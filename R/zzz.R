
const .onLoad = function() {
    # register the javascript language interpreter
    # and language runtime into R# environment
    # on package load
    .Internal::register(["*.js", "*.ts"], assembly("vjs.dll"));
}