let botao_c = document.querySelector('.botao-c')
let complemento1 = document.querySelector('#texto_complemento')

let Pessoas = []
let tabela_dados = document.querySelector('#table-c')
let form = document.querySelector('form')

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let tel = document.querySelector('#tel')
let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let numero_casa = document.querySelector('#numero_casa')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')

let acao = ''
function cadastrar() {
    if (nome.value.length == 0 || email.value.length == 0 || tel.value.length == 0 || cep.value.length == 0 || rua.value.length == 0 || numero_casa.value.length == 0 || bairro.value.length == 0 || cidade.value.length == 0 || estado.value.length == 0 ) {
        alert('Por favor, preencha todos os dados')
    } else {
        class Pessoa {
            constructor(nome, email, tel, cep, rua, numero_casa, complemento, bairro, cidade, estado, acao) {
                this.nome = nome
                this.email = email
                this.tel = tel
                this.cep = cep
                this.rua = rua
                this.numero_casa = numero_casa
                this.complemento1 = complemento
                this.bairro = bairro
                this.cidade = cidade
                this.estado = estado
                this.acao = acao
            }
        }
        
        if (complemento1.style.display = 'block') {
            var pessoa = new Pessoa(nome.value, email.value, tel.value, cep.value, rua.value, numero_casa.value, complemento1.value, bairro.value, cidade.value, estado.value, acao)
        } else {
            var pessoa = new Pessoa(nome.value, email.value, tel.value, cep.value, rua.value, numero_casa.value, bairro.value, cidade.value, estado.value, acao)
        }
        
        Pessoas.push(pessoa)
        
        let tbody = document.createElement('tbody')
        
        for (c in pessoa) {
            let table = document.querySelector('#table')

            let tr = document.createElement('td')
            
            tr.innerText = pessoa[c]
            
            tbody.appendChild(tr)
            
            table.appendChild(tbody)
            
        }
        tabela_dados.style.display = 'block'
        form.style.display = 'none'
    }
    
}

function comple() {
    complemento1.style.display = 'block'
    botao_c.style.display = 'none'
}

function voltar() {
    tabela_dados.style.display = 'none'
    form.style.display = 'block'
    nome.value = ''
    email.value = ''
    tel.value = ''
    cep.value = ''
    rua.value = ''
    numero_casa.value = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''

    complemento1.style.display = 'none'
    complemento1.value = ''
    botao_c.style.display = 'block'
}
