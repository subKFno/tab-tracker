<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" v-model="email" placeholder="email" />
        <br />
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
        />
        <br />
        <button @click="register">Register</button>
        <br />
        <div class="error" v-html="error"></div>
    </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
    name: "RegisterView",
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        async register() {
            try {
                await AuthenticationService.register({
                    email: this.email,
                    password: this.password,
                });
                this.error = "";
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
</style>
