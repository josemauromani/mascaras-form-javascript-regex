const masks = {
    cpf(value) {
        console.log(value)
        return value
            .replace(/\D/g,'') // remove qq coisa que não seja número
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d{1,2})/,'$1-$2')
            .replace(/(-\d{2})\d+?$/,'$1')
    },

    cnpj(value) {
        console.log(value)
        return value
            .replace(/\D/g,'')
            .replace(/(\d{2})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1/$2')
            .replace(/(\d{4})(\d)/,'$1-$2')
            .replace(/(-\d{2})\d+?$/,'$1')
    },

    celular(value) {
        console.log(value)
        return value
            .replace(/\D/g,'')
            .replace(/(\d{2})(\d)/,'($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
            .replace(/(-\d{4})\d+?$/,'$1')
    },

    cep(value) {
        console.log(value)
        return value
            .replace(/\D/g,'')
            .replace(/(\d{2})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1-$2')
            .replace(/(-\d{3})\d+?$/,'$1')
    },

    pis(value) {
        console.log(value)
        return value
            .replace(/\D/g,'')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{5})(\d)/, '$1.$2')
            .replace(/(\d{5}\.)(\d{2})(\d)/,'$1$2-$3')
            .replace(/(-\d)\d+?$/,'$1')
    },

    data(value) {
        console.log(value)
        return value
            .replace(/\D/g,'')
            .replace(/(\d{2})(\d)/,'$1/$2')
            .replace(/(\d{2})(\d)/,'$1/$2')
            .replace(/(\d{4})\d+?$/,'$1')
    }

}



document.querySelectorAll('input').forEach(($input) => {
    //dataset permite acessar as propriedades data-xxx 
    const field = $input.dataset.js

    // adiciona eventListener (escuta eventos) do tipo input, 
    // ou seja sempre que inserir algo em algum campo
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})