function attach()
{
    for (var i = 0; i < activeCubicles.length; i++)
    {
        THREE.SceneUtils.attach( activeCubicles[i], scene, cubicleArray[1][1][1] );						
    }
}

function attachL()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[i][j][0])	
        }	
    }					
    attach();				 
}

function attachM()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            if (i==1 && j==1) 
            {
                j++;
            }
            activeCubicles.push(cubicleArray[i][j][1])	
        }	
    }					
    attach();				
}

function attachR()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[i][j][2])							
        }						
    }
    
    attach();					
}

function attachU()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[2][i][j])							
        }						
    }
    attach(); 					
}

function attachE()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            if (i==1 && j==1) 
            {
                j++;
            }
            activeCubicles.push(cubicleArray[1][i][j])	
        }	
    }					
    attach();				
}

function attachD()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[0][i][j])	
        }	
    }					
    attach();				  
}

function attachF()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[i][2][j])	
        }	
    }					
    attach();				  
}

function attachB()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            activeCubicles.push(cubicleArray[i][0][j])	
        }	
    }					
    attach();				
}

function attachAll()
{	 
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            for (var k = 0; k < 3; k++)
            {
                if (i==1 && j==1 && k==1) 
                {
                    k++;
                }
                activeCubicles.push(cubicleArray[i][j][k])
            }	
        }	
    }					
    attach();				
}



