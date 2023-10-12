class menu extends HTMLElement{
	constructor(){
		super()
		
		this.innerHTML = `
			<div class="navbar">
				<a href="/dashboard" id="btnDashboard">Dashboard</a>
				<a href="/order" id="btnOrders">Orders</a>
				<a href="/appointment" id="btnAppointment">Appointment</a>
				<a href="/daily-sales" id="btnDailySales">Daily Sales</a>
				<a href="/faq" id="btnFAQ">FAQ</a>
			</div>
		`;
	}
}

customElements.define("show-menu", menu)