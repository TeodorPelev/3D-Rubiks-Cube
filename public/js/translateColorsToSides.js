var translatedColorsArray = new Array(6);
for (i = 0; i < 6; i++)
    translatedColorsArray[i]=new Array(9);

function translateColorsToSides()
{
    switch (colorsArray[0][4]) 
    {
        case 1:
            if (colorsArray[2][4] == 3) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'f';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'b';
                                break;
                        }
                        
                    }
                    
                }
                    
                
            }
            else if (colorsArray[2][4] == 4) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'f';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'b';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 2) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'f';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'b';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 5) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                        }
                    }
                }
            }
            break;
        case 2:
            if (colorsArray[2][4] == 3) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 4) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 1) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 6) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                        }
                    }
                }
            }
            break;
        case 3: 
            if (colorsArray[2][4] == 6) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 1) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 2) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 5) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                        }
                    }
                }
            }
            break;
        case 4: 
            if (colorsArray[2][4] == 6) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 1) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 2) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 5) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                        }
                    }
                }
            }
            break;
        case 5: 
            if (colorsArray[2][4] == 6) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 1) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 3) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 4) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                        }
                    }
                }
            }
            break;
        case 6:
            if (colorsArray[2][4] == 3) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'b';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'f';
                                break;
                        }
                        
                    }
                    
                }
                    
                
            }
            else if (colorsArray[2][4] == 4) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'b';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'f';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 2) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                            translatedColorsArray[i][j] = 'b';
                                break;
                            case 2: 
                            translatedColorsArray[i][j] = 'u';
                                break;
                            case 3: 
                            translatedColorsArray[i][j] = 'r';
                                break;
                            case 4: 
                            translatedColorsArray[i][j] = 'l';
                                break;
                            case 5: 
                            translatedColorsArray[i][j] = 'd';
                                break;
                            case 6: 
                            translatedColorsArray[i][j] = 'f';
                                break;
                        }
                    }
                }
            }
            else if (colorsArray[2][4] == 5) 
            {
                for (let i = 0; i < 6; i++) 
                {
                    for (let j = 0; j < 9; j++) 
                    {
                        switch (colorsArray[i][j]) 
                        {
                            case 1:
                                translatedColorsArray[i][j] = 'b';
                                break;
                            case 2: 
                                translatedColorsArray[i][j] = 'd';
                                break;
                            case 3: 
                                translatedColorsArray[i][j] = 'l';
                                break;
                            case 4: 
                                translatedColorsArray[i][j] = 'r';
                                break;
                            case 5: 
                                translatedColorsArray[i][j] = 'u';
                                break;
                            case 6: 
                                translatedColorsArray[i][j] = 'f';
                                break;
                        }
                    }
                }
            }
            break;
    
    
    }
    
}