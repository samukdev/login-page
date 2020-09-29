new Vue({
    el: '#app',
    data: {
        users: [{email:'admin@admin.com', password: 'admin'},
                {email:'manager@manager.com', password: 'manager'}],
        inputEmail: null,
        inputPassword: null,
        inputMostrarSenha: false,
        emailErrorMessage: false,
        passwordErrorMessage: false
    },
    methods:{
        validateLogin(e){
            //Checa se o campo email está preenchido
            if(this.inputEmail == '' || this.inputEmail == false || this.inputEmail == null){
                this.emailErrorMessage = 'Por favor, insira seu email'
                
            }
             //Checa se o email digitado está em um formato válido
            else if(!this.validateEmail(this.inputEmail)){
            this.emailErrorMessage = 'Ops! Formato inválido, confira o email e tente novamente'
           
            }
            else{
                this.emailErrorMessage = false
            }
            
            //Checa se o campo senha está preenchido
            if(this.inputPassword == '' || this.inputPassword  == false || this.inputPassword  == null){
                this.passwordErrorMessage = 'Por favor, insira sua senha'
                
            }
            else this.passwordErrorMessage = false


            //Checa se usuário e senha batem
            if(this.passwordErrorMessage == false && this.emailErrorMessage == false){
                if(!this.validateEmailPassWord()){
                    e.preventDefault()
                }
            }
            else{
                e.preventDefault();
            }


            
        },
        validateEmail(email){      
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
        },
        validateEmailPassWord(){
            
            //Checa se o email é cadastrado
            let userIndex = this.users.map(function(e){ return e.email}).indexOf(this.inputEmail.toLowerCase());
            if(userIndex == -1){
                this.emailErrorMessage = 'Parece que você ainda não está cadastrado :('
                return false;
            }
            //Checa correpondência entre email e senha
            else{
                
                this.emailErrorMessage = false;
                if(this.users[userIndex].password != this.inputPassword){
                    this.passwordErrorMessage = 'Senha incorreta';
                    return false;
                }
                else{
                    return true;
                }
            

            }
            

           
        }
    },
    computed:{
        passwordFieldType(){
            return this.inputMostrarSenha ? 'text'  : 'password' ;
        }
    }
})