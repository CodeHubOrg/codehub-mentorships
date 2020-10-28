<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\MentorMenteeRequest;
use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use App\Presenters\MenteeProfilePresenter;
use App\Presenters\MentorProfilePresenter;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $mentorProfiles = MentorProfile::all();
        $mentors = $mentorProfiles->map(function ($mentor) {
            return MentorProfilePresenter::make($mentor)->all();
        });

        $menteeProfilesUnpaired = MenteeProfile::doesntHave('mentorProfiles')->get();
        $mentees = $menteeProfilesUnpaired->map(function ($mentee) {
            return MenteeProfilePresenter::make($mentee)->all();
        });

        $mentorshipSummary = [];
        $menteeMentorProfiles = MenteeProfile::whereHas('mentorProfiles')->get();
        foreach ($menteeMentorProfiles as $mentee) {
            $summary;
            $menteeUser = $mentee->user;
            $summary['menteeFirstName'] = $menteeUser->first_name;
            $summary['menteeLastName'] = $menteeUser->last_name;
            $summary['menteeEmail'] = $menteeUser->email;
            $summary['menteeId'] = $mentee->id;

            $pairedmentors = $mentee->mentorProfiles;
            foreach ($pairedmentors as $mentor) {
                $mentorUser = $mentor->user;
                $summary['mentorFirstName'] = $mentorUser->first_name;
                $summary['mentorLastName'] = $mentorUser->last_name;
                $summary['mentorEmail'] = $mentorUser->email;
                $summary['mentorId'] = $mentorUser->id;
                $mentorshipSummary[] = $summary;
            }
        }

        return Inertia::render('Admin/Dashboard/Index', [
            'mentors' => $mentors,
            'mentees' => $mentees,
            'summary' => $mentorshipSummary,
        ]);
    }

    public function store(MentorMenteeRequest $request)
    {
        $validated = $request->validated();

        $mentor = MentorProfile::findOrFail($validated['mentor_id']);
        $mentee = MenteeProfile::findOrFail($validated['mentee_id']);

        $mentee->mentorProfiles()->attach($mentor);

        return Redirect::route('admin.dashboard.index');
    }

    public function destroy(MentorMenteeRequest $request)
    {
        $mentorId = $request->mentor_id;
        $menteeId = $request->mentee_id;

        if ($mentorId && $menteeId) {
            $mentee = MenteeProfile::findOrFail($menteeId);

            $mentee->mentorProfiles()->detach();
        }
        // else error handling

        return Redirect::route('admin.dashboard.index');
    }
}
