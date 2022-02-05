class Pessoa {
    constructor() {
        this.Pessoas = []
        this.id = 1
    }

    cadastrar() {
        let pessoa = this.nova_pessoa()

        if (this.validaCampos(pessoa)) {
            document.querySelector('#table-c').style.display = 'block'
            document.querySelector('#formulario').style.display = 'none'
            this.adicionar(pessoa)
        }
        
        this.adicionar_tabela()
    }

    nova_pessoa() {
        let pessoa = {}

        pessoa.id = this.id
        pessoa.nome = document.querySelector('#nome').value
        pessoa.email = document.querySelector('#email').value
        pessoa.telefone = document.querySelector('#tel').value
        pessoa.cep = document.querySelector('#cep').value
        pessoa.rua = document.querySelector('#rua').value
        pessoa.numero_casa = document.querySelector('#numero_casa').value
        pessoa.bairro = document.querySelector('#bairro').value
        pessoa.cidade = document.querySelector('#cidade').value
        pessoa.estado = document.querySelector('#estado').value

        pessoa.complemento = document.querySelector('#texto-complemento').value
        
        return pessoa
    }

    adicionar(pessoa) {
        this.Pessoas.push(pessoa)
        this.id ++

        console.log(this.Pessoas)
    }

    validaCampos(pessoa) {
        let msg = ''

        if (pessoa.nome == '') {
            msg += 'Informe o nome completo da pessoa \n'
        }

        if (pessoa.email == '') {
            msg += 'Informe o E-mail \n'
        }

        if (pessoa.telefone == '') {
            msg += 'Informe o número de telefone \n'
        }

        if (pessoa.cep == '') {
            msg += 'Informe o CEP \n'
        }

        if (pessoa.rua == '') {
            msg += 'Informe o nome da rua \n'
        }

        if (pessoa.numero_casa == '') {
            msg += 'Informe o numero da casa \n'
        }

        if (pessoa.bairro == '') {
            msg += 'Informe o nome do bairro \n'
        }

        if (pessoa.cidade == '') {
            msg += 'Informe o nome da cidade \n'
        }

        if (pessoa.estado == '') {
            msg += 'Informe o nome do estado'
        }
        if (msg != '') {
            alert(msg)
            return false
        } else {
            return true
        }
    }

    adicionar_tabela() {
        let tbody = document.querySelector('#tabelacorpo')
        tbody.innerText = ''

        for (let c = 0; c < this.Pessoas.length; c++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_email = tr.insertCell()
            let td_telefone = tr.insertCell()
            let td_cep = tr.insertCell()
            let td_rua = tr.insertCell()
            let td_numero_casa = tr.insertCell()
            let td_bairro = tr.insertCell()
            let td_cidade = tr.insertCell()
            let td_estado = tr.insertCell()
            let td_complemento = tr.insertCell()
            let td_botao_deletar = tr.insertCell()

            td_id.innerText = this.Pessoas[c].id
            td_nome.innerText = this.Pessoas[c].nome
            td_email.innerText = this.Pessoas[c].email
            td_telefone.innerText = this.Pessoas[c].telefone
            td_cep.innerText = this.Pessoas[c].cep
            td_rua.innerText = this.Pessoas[c].rua
            td_numero_casa.innerText = this.Pessoas[c].numero_casa
            td_bairro.innerText = this.Pessoas[c].bairro
            td_cidade.innerText = this.Pessoas[c].cidade
            td_estado.innerText = this.Pessoas[c].estado
            td_complemento.innerText = this.Pessoas[c].complemento


            let img_deletar = document.createElement('img')
            img_deletar.setAttribute('class', 'lixeira')
            img_deletar.setAttribute('onclick', 'pessoa.deletar('+ this.Pessoas[c].id +')')
            img_deletar.src = 'icons/delete.svg'

            td_botao_deletar.appendChild(img_deletar)
        }
    }

    deletar(id) {
        let tbody = document.querySelector('#tabelacorpo')
        
        let confirmar = confirm('Quer mesmo excluir este cadastro permanentemente?')

        if (confirmar == true) {
            for (let c = 0; c < this.Pessoas.length; c++) {
                if (this.Pessoas[c].id == id) {
                    this.Pessoas.splice(c, 1)
                    console.log(this.Pessoas)
                    tbody.deleteRow(c)
                }
            }
        }
    }

    voltar() {
        document.querySelector('#table-c').style.display = 'none'
        document.querySelector('#formulario').style.display = 'block'

        document.querySelector('#nome').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#tel').value = ''
        document.querySelector('#cep').value = ''
        document.querySelector('#rua').value = ''
        document.querySelector('#numero_casa').value = ''
        document.querySelector('#bairro').value = ''
        document.querySelector('#cidade').value = ''
        document.querySelector('#estado').value = ''

    }

    complemento() {
        document.querySelector('#botao-complemento').style.display = 'none'
        document.querySelector('#texto-complemento').style.display = 'block'
    }
}

let pessoa = new Pessoa()