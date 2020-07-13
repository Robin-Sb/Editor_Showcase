namespace Test {
    import fudge = FudgeCore;
    window.addEventListener("load", editorLoad);

    let graph: fudge.Node = new fudge.Node("graph");
 

    function editorLoad(_event: Event): void {
        graph.addChild(new Enemy());
        serializeGraph();
    }

    function serializeGraph(): void {
        fudge.Serializer.registerNamespace(Test);
        let serialization: fudge.Serialization = fudge.Serializer.serialize(graph);
        let json: string = fudge.Serializer.stringify(serialization);
        console.log(json);
    }
}