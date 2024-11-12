//api/auth/logout.js
export default function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    window.location.href = '/auth/login';
}