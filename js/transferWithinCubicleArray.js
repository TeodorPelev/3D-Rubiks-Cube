var transferCube = new THREE.Object3D();
function transferL()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = transferCube;

    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[0][1][0];
    cubicleArray[0][1][0] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = cubicleArray[2][1][0];
    cubicleArray[2][1][0] = transferCube;
}
function transferM()
{
    transferCube = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = transferCube;

    transferCube = cubicleArray[1][0][1];
    cubicleArray[1][0][1] = cubicleArray[0][1][1];
    cubicleArray[0][1][1] = cubicleArray[1][2][1];
    cubicleArray[1][2][1] = cubicleArray[2][1][1];
    cubicleArray[2][1][1] = transferCube;
}
function transferR()
{
    transferCube = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = transferCube;

    transferCube = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = cubicleArray[2][1][2];
    cubicleArray[2][1][2] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = cubicleArray[0][1][2];
    cubicleArray[0][1][2] = transferCube;
}
function transferU()
{
    transferCube = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = transferCube;

    transferCube = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = cubicleArray[2][1][0];
    cubicleArray[2][1][0] = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[2][1][2];
    cubicleArray[2][1][2] = transferCube;
}
function transferE()
{
    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = transferCube;

    transferCube = cubicleArray[1][0][1];
    cubicleArray[1][0][1] = cubicleArray[1][1][2];
    cubicleArray[1][1][2] = cubicleArray[1][2][1];
    cubicleArray[1][2][1] = cubicleArray[1][1][0];
    cubicleArray[1][1][0] = transferCube;
}
function transferD()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = transferCube;

    transferCube = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = cubicleArray[0][1][2];
    cubicleArray[0][1][2] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = cubicleArray[0][1][0];
    cubicleArray[0][1][0] = transferCube;
}
function transferF()
{
    transferCube = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = transferCube;

    transferCube = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = transferCube;
}
function transferB()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = transferCube;

    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = transferCube;
}
function transferLpr()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = transferCube;

    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[2][1][0];
    cubicleArray[2][1][0] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = cubicleArray[0][1][0];
    cubicleArray[0][1][0] = transferCube;
}
function transferMpr()
{
    transferCube = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = transferCube;

    transferCube = cubicleArray[1][0][1];
    cubicleArray[1][0][1] = cubicleArray[2][1][1];
    cubicleArray[2][1][1] = cubicleArray[1][2][1];
    cubicleArray[1][2][1] = cubicleArray[0][1][1];
    cubicleArray[0][1][1] = transferCube;
}
function transferRpr()
{
    transferCube = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = transferCube;

    transferCube = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = cubicleArray[0][1][2];
    cubicleArray[0][1][2] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = cubicleArray[2][1][2];
    cubicleArray[2][1][2] = transferCube;
}
function transferUpr()
{
    transferCube = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = transferCube;

    transferCube = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = cubicleArray[2][1][2];
    cubicleArray[2][1][2] = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[2][1][0];
    cubicleArray[2][1][0] = transferCube;
}
function transferEpr()
{
    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = transferCube;

    transferCube = cubicleArray[1][0][1];
    cubicleArray[1][0][1] = cubicleArray[1][1][0];
    cubicleArray[1][1][0] = cubicleArray[1][2][1];
    cubicleArray[1][2][1] = cubicleArray[1][1][2];
    cubicleArray[1][1][2] = transferCube;
}
function transferDpr()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = transferCube;

    transferCube = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = cubicleArray[0][1][0];
    cubicleArray[0][1][0] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = cubicleArray[0][1][2];
    cubicleArray[0][1][2] = transferCube;
}
function transferFpr()
{
    transferCube = cubicleArray[2][2][0];
    cubicleArray[2][2][0] = cubicleArray[2][2][2];
    cubicleArray[2][2][2] = cubicleArray[0][2][2];
    cubicleArray[0][2][2] = cubicleArray[0][2][0];
    cubicleArray[0][2][0] = transferCube;

    transferCube = cubicleArray[2][2][1];
    cubicleArray[2][2][1] = cubicleArray[1][2][2];
    cubicleArray[1][2][2] = cubicleArray[0][2][1];
    cubicleArray[0][2][1] = cubicleArray[1][2][0];
    cubicleArray[1][2][0] = transferCube;
}
function transferBpr()
{
    transferCube = cubicleArray[0][0][0];
    cubicleArray[0][0][0] = cubicleArray[0][0][2];
    cubicleArray[0][0][2] = cubicleArray[2][0][2];
    cubicleArray[2][0][2] = cubicleArray[2][0][0];
    cubicleArray[2][0][0] = transferCube;

    transferCube = cubicleArray[1][0][0];
    cubicleArray[1][0][0] = cubicleArray[0][0][1];
    cubicleArray[0][0][1] = cubicleArray[1][0][2];
    cubicleArray[1][0][2] = cubicleArray[2][0][1];
    cubicleArray[2][0][1] = transferCube;
}