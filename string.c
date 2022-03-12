
int main(void)
{
    for (int i = 0; i < 10; i ++)
    {
        printf("개발공부는 재미있다!\n");
    }
}
int main(void){
    string s = get_string("Input: ");
    printf("Output: ");
        for (int i = 0; i < s.length; i++) {
            printf("%c", s[i]);
        }
    printf("/n");
}
#include <stdio.h>

void swap(int a, int b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("x is %i, y is %i\n", x, y);
    swap(x, y);
    printf("x is %i, y is %i\n", x, y);
}

void swap(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;
}