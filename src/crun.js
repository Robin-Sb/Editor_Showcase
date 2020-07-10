"use strict";
var Platform_Editor;
(function (Platform_Editor) {
    var fudge = FudgeCore;
    window.addEventListener("load", editorLoad);
    let graph = new fudge.Node("graph");
    function editorLoad(_event) {
        serializeGraph();
    }
    function serializeGraph() {
        let serialization = fudge.Serializer.serialize(graph);
        let json = fudge.Serializer.stringify(serialization);
        console.log(json);
    }
})(Platform_Editor || (Platform_Editor = {}));
//# sourceMappingURL=crun.js.map