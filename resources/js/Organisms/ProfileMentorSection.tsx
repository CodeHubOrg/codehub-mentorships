import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
	heading: string;
	mentorProfile?: {
		id: number;
		mentorexp: string;
		interests?: string;
		skillsets?: string;
		suitabletime?: string;
		extrainfo?: string;
		status?: string;
	};
}

const ProfileMentorSection: React.FC<IProps> = ({ heading, mentorProfile }) => {
	const {
		mentorexp,
		interests,
		skillsets,
		suitabletime,
		extrainfo,
		status,
	} = mentorProfile;

	return (
		<Card heading={heading}>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Mentoring experience:
				</span>{" "}
				{mentorexp}
			</p>
			{interests && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Interests:
					</span>{" "}
					{interests}
				</p>
			)}
			{skillsets && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Skill set:
					</span>{" "}
					{skillsets}
				</p>
			)}
			{suitabletime && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Suitable Time:
					</span>{" "}
					{suitabletime}
				</p>
			)}
			{extrainfo && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Additional info:
					</span>{" "}
					{extrainfo}
				</p>
			)}
			{status === "Pending" && (
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
