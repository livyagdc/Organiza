//api/auth/logout.js
export default function logout() {
    sessionStorage.removeItem('token')
    window.location.href = '/auth/login';
}