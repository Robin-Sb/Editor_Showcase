"use strict";
var Platform_Editor;
(function (Platform_Editor) {
    var fudge = FudgeCore;
    class PickableNode extends fudge.Node {
        constructor(name) {
            super(name);
        }
    }
    Platform_Editor.PickableNode = PickableNode;
})(Platform_Editor || (Platform_Editor = {}));
/// <reference path="PickableNode.ts" />
var Platform_Editor;
/// <reference path="PickableNode.ts" />
(function (Platform_Editor) {
    var fudge = FudgeCore;
    class Enemy extends Platform_Editor.PickableNode {
        constructor() {
            super("Enemy");
            this.addComponent(new fudge.ComponentTransform(new fudge.Matrix4x4()));
            let cmpMesh = new fudge.ComponentMesh(new fudge.MeshSphere());
            this.addComponent(cmpMesh);
            let cmpMaterial = new fudge.ComponentMaterial(Enemy.material);
            cmpMaterial.clrPrimary = fudge.Color.CSS("Red");
            this.addComponent(cmpMaterial);
        }
    }
    Enemy.material = new fudge.Material("BaseMtr", fudge.ShaderFlat, new fudge.CoatColored());
    Platform_Editor.Enemy = Enemy;
})(Platform_Editor || (Platform_Editor = {}));
var Platform_Editor;
(function (Platform_Editor) {
    var fudge = FudgeCore;
    window.addEventListener("load", editorLoad);
    let graph = new fudge.Node("graph");
    function editorLoad(_event) {
        graph.addChild(new Platform_Editor.Enemy());
        serializeGraph();
    }
    function serializeGraph() {
        fudge.Serializer.registerNamespace(Platform_Editor);
        let serialization = fudge.Serializer.serialize(graph);
        let json = fudge.Serializer.stringify(serialization);
        console.log(json);
    }
})(Platform_Editor || (Platform_Editor = {}));
//# sourceMappingURL=crun.js.map