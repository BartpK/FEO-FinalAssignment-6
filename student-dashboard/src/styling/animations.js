
const animations = {

    difficult: {
        onExit: {
            duration: 500,
            before: () => ({
                _y: 0,
                fill: "a888df"

            })
        }
    },

    fun: {
        onExit: {
            duration: 500,
            before: () => ({
                _y: 0,
                fill: "#00bcd6"

            })
        }
    }
}

export default animations

