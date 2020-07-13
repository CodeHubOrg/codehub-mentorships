import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
	heading: string;
	mentorProfile?: {
		id: number;
		mentoring_experience: string;
		interests?: string;
		skillset?: string;
		suitable_time?: string;
		extra_info?: string;
		status?: number;
	};
}

const ProfileMentorSection: React.FC<IProps> = ({ heading, mentorProfile }) => {
	const {
		mentoring_experience,
		interests,
		skillset,
		suitable_time,
		extra_info,
		status,
	} = mentorProfile;

	return (
		<Card heading={heading}>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Mentoring experience:
				</span>{" "}
				{mentoring_experience}
			</p>
			{interests && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Interests:
					</span>{" "}
					{interests}
				</p>
			)}
			{skillset && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Skill set:
					</span>{" "}
					{skillset}
				</p>
			)}
			{suitable_time && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Suitable Time:
					</span>{" "}
					{suitable_time}
				</p>
			)}
			{extra_info && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Additional info:
					</span>{" "}
					{extra_info}
				</p>
			)}
			{status === 0 && (
				<>
					<p>&nbsp;</p>
					<p>
						<em>Your registration is pending.</em>
					</p>
				</>
			)}
			<p>&nbsp;</p>
		</Card>
	);
};

export default ProfileMentorSection;
