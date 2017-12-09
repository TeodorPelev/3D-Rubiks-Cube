function sixSpots()
{
    let i = 500;
    wait(i, rotateE);
    wait((i+=500), rotateM);
    wait((i+=500), rotateEpr);
    wait((i+=500), rotateMpr);
    wait((i+=500), alertingSixSpots);
}
function alertingSixSpots()
{
    alert("E M E' M'");
}

function checkerBoard()
{
    let i = 500;
    wait(i, rotateL);
    wait((i+=500), rotateRpr);
    wait((i+=500), rotateL);
    wait((i+=500), rotateRpr);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateD);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateD);
    wait((i+=500), rotateF);
    wait((i+=500), rotateB);
    wait((i+=500), rotateF);
    wait((i+=500), rotateB);
    wait((i+=500), alertingCheckerBoard);
}
function alertingCheckerBoard()
{
    alert("L2 R2 U2 D2 F2 B2");
}

function cubeInCube()
{
    let i = 500;
    wait(i, rotateF);
    wait((i+=500), rotateL);
    wait((i+=500), rotateF);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateR);
    wait((i+=500), rotateU);
    wait((i+=500), rotateF);
    wait((i+=500), rotateF);
    wait((i+=500), rotateL);
    wait((i+=500), rotateL);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateLpr);
    wait((i+=500), rotateB);
    wait((i+=500), rotateDpr);
    wait((i+=500), rotateBpr);
    wait((i+=500), rotateL);
    wait((i+=500), rotateL);
    wait((i+=500), rotateU);
    wait((i+=500), rotateY);
    wait((i+=500), alertingCubeInCube);
}
function alertingCubeInCube()
{
    alert("F L F U' R U F2 L2 U' L' B D' B' L2 U");
}

function cubeInCubeInCube()
{
    let i = 500;
    wait(i, rotateUpr);
    wait((i+=500), rotateLpr);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateFpr);
    wait((i+=500), rotateR);
    wait((i+=500), rotateR);
    wait((i+=500), rotateBpr);
    wait((i+=500), rotateR);
    wait((i+=500), rotateF);
    wait((i+=500), rotateU);
    wait((i+=500), rotateB);
    wait((i+=500), rotateB);
    wait((i+=500), rotateU);
    wait((i+=500), rotateBpr);
    wait((i+=500), rotateL);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateF);
    wait((i+=500), rotateU);
    wait((i+=500), rotateR);
    wait((i+=500), rotateFpr);
    wait((i+=500), rotateY);
    wait((i+=500), alertingCubeInCubeInCube);
}
function alertingCubeInCubeInCube()
{
    alert("U' L' U' F' R2 B' R F U B2 U B' L U' F U R F'");
}

function superflip()
{
    let i = 500;
    wait(i, rotateU);
    wait((i+=500), rotateR);
    wait((i+=500), rotateR);
    wait((i+=500), rotateF);
    wait((i+=500), rotateB);
    wait((i+=500), rotateR);
    wait((i+=500), rotateB);
    wait((i+=500), rotateB);
    wait((i+=500), rotateR);
    wait((i+=500), rotateU);
    wait((i+=500), rotateU);
    wait((i+=500), rotateL);
    wait((i+=500), rotateB);
    wait((i+=500), rotateB);
    wait((i+=500), rotateR);
    wait((i+=500), rotateUpr);
    wait((i+=500), rotateDpr);
    wait((i+=500), rotateR);
    wait((i+=500), rotateR);
    wait((i+=500), rotateF);
    wait((i+=500), rotateRpr);
    wait((i+=500), rotateL);
    wait((i+=500), rotateB);
    wait((i+=500), rotateB);
    wait((i+=500), rotateU);
    wait((i+=500), rotateU);
    wait((i+=500), rotateF);
    wait((i+=500), rotateF);
    wait((i+=500), alertingSuperFlip);
}
function alertingSuperFlip()
{
    alert("U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2");
}

function twistedPeaks()
{
    let i = 500;
    wait(i, rotateF);
    wait((i+=500), rotateBpr);
    wait((i+=500), rotateU);
    wait((i+=500), rotateF);
    wait((i+=500), rotateU);
    wait((i+=500), rotateF);
    wait((i+=500), rotateU);
    wait((i+=500), rotateL);
    wait((i+=500), rotateB);
    wait((i+=500), rotateL);
    wait((i+=500), rotateL);
    wait((i+=500), rotateBpr);
    wait((i+=500), rotateU);
    wait((i+=500), rotateFpr);
    wait((i+=500), rotateL);
    wait((i+=500), rotateU);
    wait((i+=500), rotateLpr);
    wait((i+=500), rotateB);
    wait((i+=500), rotateY);
    wait((i+=500), alertingTwistedPeaks);
}
function alertingTwistedPeaks()
{
    alert("F B' U F U F U L B L2 B' U F' L U L' B");
}