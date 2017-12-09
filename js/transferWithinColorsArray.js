var transferColor = [];
for (let i = 0; i < 9; i++)
{
    transferColor.push(0);    
}
//sideId: 0=Front, 1=Right, 2=Up, 3=Down, 4=Left, 5=Back
function transferColorsSide(sideId)
{
    transferColor[0] = colorsArray[sideId][0];
    transferColor[1] = colorsArray[sideId][1];

    colorsArray[sideId][0] = colorsArray[sideId][6];
    colorsArray[sideId][6] = colorsArray[sideId][8];
    colorsArray[sideId][8] = colorsArray[sideId][2];
    colorsArray[sideId][2] = transferColor[0];

    colorsArray[sideId][1] = colorsArray[sideId][3];
    colorsArray[sideId][3] = colorsArray[sideId][7];
    colorsArray[sideId][7] = colorsArray[sideId][5];
    colorsArray[sideId][5] = transferColor[1];
}

function transferColorsSidePr(sideId)
{
    transferColor[0] = colorsArray[sideId][0];
    transferColor[1] = colorsArray[sideId][1];

    colorsArray[sideId][0] = colorsArray[sideId][2];
    colorsArray[sideId][2] = colorsArray[sideId][8];
    colorsArray[sideId][8] = colorsArray[sideId][6];
    colorsArray[sideId][6] = transferColor[0];

    colorsArray[sideId][1] = colorsArray[sideId][5];
    colorsArray[sideId][5] = colorsArray[sideId][7];
    colorsArray[sideId][7] = colorsArray[sideId][3];
    colorsArray[sideId][3] = transferColor[1];
}

function transferColorsU()
{
    for (let i = 0; i < 3; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[1][i];
        colorsArray[1][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[4][i];
        colorsArray[4][i] = transferColor[i];  
    }
    transferColorsSide(2);  
}

function transferColorsR()
{
    for (let i = 2, j = 6; i < 9; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[3][i];
        colorsArray[3][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[2][i];
        colorsArray[2][i] = transferColor[i];  
    }
    transferColorsSide(1);
}

function transferColorsL()
{
    for (let i = 0, j = 8; i < 7; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[2][i];
        colorsArray[2][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[3][i];
        colorsArray[3][i] = transferColor[i];  
    }
    transferColorsSide(4);
}

function transferColorsD()
{
    for (let i = 6; i < 9; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[4][i];
        colorsArray[4][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[1][i];
        colorsArray[1][i] = transferColor[i];  
    }
    transferColorsSide(3);  
}

function transferColorsE()
{
    for (let i = 3; i < 6; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[4][i];
        colorsArray[4][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[1][i];
        colorsArray[1][i] = transferColor[i];  
    }  
}

function transferColorsM()
{
    for (let i = 1, j = 7; i < 8; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[2][i];
        colorsArray[2][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[3][i];
        colorsArray[3][i] = transferColor[i];  
    }
}

function transferColorsUpr()
{
    for (let i = 0; i < 3; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[4][i];
        colorsArray[4][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[1][i];
        colorsArray[1][i] = transferColor[i];  
    }
    transferColorsSidePr(2);  
}

function transferColorsDpr()
{
    for (let i = 6; i < 9; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[1][i];
        colorsArray[1][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[4][i];
        colorsArray[4][i] = transferColor[i];  
    }
    transferColorsSidePr(3);  
}

function transferColorsEpr()
{
    for (let i = 3; i < 6; i++) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[1][i];
        colorsArray[1][i] = colorsArray[5][i];
        colorsArray[5][i] = colorsArray[4][i];
        colorsArray[4][i] = transferColor[i];  
    }  
}

function transferColorsRpr()
{
    for (let i = 2, j = 6; i < 9; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[2][i];
        colorsArray[2][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[3][i];
        colorsArray[3][i] = transferColor[i];  
    }
    transferColorsSidePr(1);
}

function transferColorsMpr()
{
    for (let i = 1, j = 7; i < 8; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[3][i];
        colorsArray[3][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[2][i];
        colorsArray[2][i] = transferColor[i];  
    }
}

function transferColorsLpr()
{
    for (let i = 0, j = 8; i < 7; i = i + 3, j = j - 3) 
    {
        transferColor[i] = colorsArray[0][i];
        colorsArray[0][i] = colorsArray[3][i];
        colorsArray[3][i] = colorsArray[5][j];
        colorsArray[5][j] = colorsArray[2][i];
        colorsArray[2][i] = transferColor[i];  
    }
    transferColorsSidePr(4);
}