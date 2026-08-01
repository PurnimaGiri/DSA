#include <stdio.h>

int main()
{
    int s[5] = {90, 85, 77, 92, 64}; 
    int length = sizeof(s)/sizeof(s[2]);
    for(int i = length - 1  ; i >= 0; i--){
        printf("%d ",s[i]);
    }

    return 0;
}
