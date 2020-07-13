var Test;
(function (Test) {
    var fudge = FudgeCore;
    window.addEventListener("load", editorLoad);
    let graph = new fudge.Node("graph");
    function editorLoad(_event) {
        graph.addChild(new Test.Enemy());
        serializeGraph();
    }
    function serializeGraph() {
        fudge.Serializer.registerNamespace(Test);
        let serialization = fudge.Serializer.serialize(graph);
        let json = fudge.Serializer.stringify(serialization);
        console.log(json);
    }
})(Test || (Test = {}));
//# sourceMappingURL=Main.js.map