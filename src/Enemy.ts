namespace Test {
    import fudge = FudgeCore;

    export class Enemy extends PickableNode {
        private static material: fudge.Material = new fudge.Material("BaseMtr", fudge.ShaderFlat, new fudge.CoatColored());

        constructor() {
            super("Enemy");

            this.addComponent(new fudge.ComponentTransform(new fudge.Matrix4x4()));
      
            let cmpMesh: fudge.ComponentMesh = new fudge.ComponentMesh(new fudge.MeshSphere());
            this.addComponent(cmpMesh);
      
            let cmpMaterial: fudge.ComponentMaterial = new fudge.ComponentMaterial(Enemy.material);
            cmpMaterial.clrPrimary = fudge.Color.CSS("Red");
            this.addComponent(cmpMaterial);
        }
    }
}