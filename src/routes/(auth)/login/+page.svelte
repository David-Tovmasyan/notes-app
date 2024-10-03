<script lang="ts">
    import {API_URL} from "$lib/constants";
    import {setCookie} from "$lib/cookies";
    import  axios from 'axios';
    import {goto} from "$app/navigation";
    import {enhance} from "$app/forms";

    interface ICredentials{
        login: string;
        password: string;
    }

    let loading = false;
    const formLoadingState = () =>{
        loading = true;
    }

    const handleSubmit = (event:SubmitEvent) => {
        event.preventDefault();
        const form:HTMLFormElement = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        handleAuthentication(data);
    }

    const handleAuthentication = async (data: ICredentials) => {
        if(!data.login || !data.password){
            return;
        }
        try {
            // Send a POST request to authenticate the user
            const response = await axios.post(API_URL + "handle-user-connection", {
                login: data.login,
                password: data.password,
            });

            // Check if authentication was successful
            if (response.status === 200 && response.data.token) {
                // Store the token in a cookie
                setCookie("token", response.data.token);

                // redirect to the notes page
                await goto("/notes");

            } else {
                // Handle authentication failure
                alert("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle the error accordingly
            alert("An error occurred. Please try again later.");
        }

        loading = false;
    }

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
<!--        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">-->
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST" on:submit={handleSubmit} use:enhance={formLoadingState}>
            <div>
                <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Login:</label>
                <div class="mt-2">
                    <input id="login" name="login" type="text" autocomplete="login" required class="block w-full rounded-md border-0 indent-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password:</label>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 indent-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Sign in</button>
            </div>
        </form>
        <p class="mt-2">
            <a href="/signup" class="font-semibold text-slate-700 mt-10 transition hover:text-slate-600">Create an account</a>
        </p>

        <div class="mt-2">
            <a href="/password_reset" class="font-semibold text-slate-700 transition hover:text-slate-600">Forgot password?</a>
        </div>

    </div>
</div>