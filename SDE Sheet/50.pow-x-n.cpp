/*
 * @lc app=leetcode id=50 lang=cpp
 *
 * [50] Pow(x, n)
 */

// @lc code=start
class Solution {
public:
    double myPow(double x, int n) {
        if(n==0) return 1;
        double res = 1;
        long long int m = abs(n);
        while(m) {
            if(m%2==0) {
                x*=x;
                m/=2;
            } else {
                res*=x;
                m--;
            }
        }
        return n>0 ? res : 1/res;
    }
};
// @lc code=end

