const updatePositionVectors = (masses, dt) => {
	const massesLen = masses.length;
	for (let i = 0; i < massesLen; i++) {
	const massI = masses[i];
	mass.x += mass.vx * dt;
	mass.y += mass.vy * dt;
	mass.z += mass.vz * dt;
	}
};
const updateVelocityVectors = (masses, dt) => {
	const massesLen = masses.length;
	for (let i = 0; i < massesLen; i++) {
		const massI = masses[i];
		massI.vx += massI.ax * dt;
		massI.vy += massI.ay * dt;
		massI.vz += massI.az * dt;
	}
};