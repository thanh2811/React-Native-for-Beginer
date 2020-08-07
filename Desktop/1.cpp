#include<bits/stdc++.h> 

using namespace std;

typedef long long ll;
#define For(i,a,b) for(int i=a;i<=b;i++)

struct node{
	node *l, *r;
	char data;
	node(char c){
		data = c;
		l = r = NULL;
	}
};

bool isOperator(char c){
	if(c=='+' || c=='-' || c=='*' || c=='/' || c=='^') return 1;
	return 0;
}

void Out(node* p){
	if(p){
		Out(p->l);
		cout<<p->data;
		Out(p->r);
	}
}

void Res(){
	string s;
	cin>>s;
	stack<node*> st;
	for(int i=0;i<s.length();i++){
		node* t  = new node(s[i]);
		if(isOperator(s[i])){	
			node *t1 = st.top(); st.pop();
			node *t2 = st.top(); st.pop();
			t->l = t2; t->r = t1;
			st.push(t);
		}
		else st.push(t);
	}
	Out(st.top());
	cout<<'\n';
}
int main(){
	ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	int test = 1;
	cin>>test;
	while(test--){
		Res();
	}
}