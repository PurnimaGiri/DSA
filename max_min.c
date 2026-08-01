#include <stdio.h>

int main()
{
    int s[5] = {90, 85, 77, 92, 64}; 
    int length = sizeof(s)/sizeof(s[2]);
    int max = s[0];
    int min = s[0];
    for(int i = 0 ; i < length ; i++){
        if(s[i]>max){
            max = s[i];
        }
        
        if(s[i]<min){
            min = s[i];
        }
    }

    printf("%d %d",max,min);

    return 0;
}
