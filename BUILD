load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_js_library",
     "closure_js_binary",
     "closure_js_test",
)

java_binary(
    name = "server",
    srcs = glob(["**/*.java"]),
    main_class = "org.pubref.App",
)

# load("//closure/private:file_test.bzl", "file_test")

closure_js_library(
    name = "client_lib",
    srcs = glob(["**/*.js"]),
    language = "ECMASCRIPT5_STRICT",
    deps = [
        "@io_bazel_rules_closure//closure/library",
    ],
)

closure_js_binary(
    name = "client_bin",
    entry_points = ["goog:org.pubref.main"],
    formatting="PRETTY_PRINT",
    compilation_level="ADVANCED",
    debug=False,
    deps = [":client_lib"],
)
