<template>
    <div class="home">
        <h1>My Login</h1>
        <form @submit.prevent="submit()">
            <div class="login-page">
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <input required type="email" v-model="form.email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="form-group">
                            <input required type="password" placeholder="Senha" class="form-control" v-model="form.password">
                        </div>
                        <button class="btn btn-primary w-100">
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        data: () => ({
            form: {
                email: '',
                password: ''
            }
        }),
        methods: {
            submit () {
                console.log(this.form)
            }
        }
    }

</script>
<style scoped lang="scss">
    .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .card {
            width: 30%;
        }
    }
</style>