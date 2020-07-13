var Test;
(function (Test) {
    var fudge = FudgeCore;
    class Enemy extends Test.PickableNode {
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
    Test.Enemy = Enemy;
})(Test || (Test = {}));
//# sourceMappingURL=Enemy.js.map