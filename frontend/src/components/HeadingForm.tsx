import { HeadingFormProps } from "../interfaces/UserInfoInterfaces";
import '../styles/HeadingForm.css'

function HeadingForm({ handleHeadingInfoChange, heading }: HeadingFormProps) {
    return (
        <>
            <div className="form-overlay">
                <form action="">
                    <h3>Personal Information</h3>
                    <div className="form-input-group">
                        <div>
                            <label htmlFor="name">
                                <small>Name</small>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={heading.name}
                                placeholder="John Doe"
                                onChange={handleHeadingInfoChange} />
                        </div>

                        <div>
                            <label htmlFor="position">
                                <small>Position</small>
                            </label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={heading.position}
                                placeholder="Software Engineer"
                                onChange={handleHeadingInfoChange} />
                        </div>
                    </div>
                    <div className="form-input-group">
                        <div>
                            <label htmlFor="phone">
                                <small>Phone</small>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={heading.phone}
                                placeholder="(555)555-5555"
                                onChange={handleHeadingInfoChange} />
                        </div>

                        <div>
                            <label htmlFor="email">
                                <small>Email</small>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={heading.email}
                                placeholder="johndoe@gmail.com"
                                onChange={handleHeadingInfoChange} />
                        </div>
                    </div>
                    <div>
                        <h3>Social Links</h3>
                        <div className="form-input-group">
                            <div>
                                <label htmlFor="github">
                                    <small>Github</small>
                                </label>
                                <input
                                    type="text"
                                    id="github"
                                    name="github"
                                    value={heading.github}
                                    placeholder="https://portfoliosite.com"
                                    onChange={handleHeadingInfoChange} />
                            </div>

                            <div>
                                <label htmlFor="linkedin">
                                    <small>LinkedIn</small>
                                </label>
                                <input
                                    type="text"
                                    id="linkedin"
                                    name="linkedin"
                                    value={heading.linkedin}
                                    onChange={handleHeadingInfoChange} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export { HeadingForm }