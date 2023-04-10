<?php

namespace Database\Seeders;

use App\Models\Organisation;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $organisationId = Organisation::firstWhere('name', env('SUPER_ADMIN_ORGANISATION'))->id;
        Team::firstOrCreate([
            'organisation_id' => $organisationId,
            'name' => env('SUPER_ADMIN_TEAM', 'Super Admin Team')
        ]);

        $user = User::firstWhere('email', env('SUPER_ADMIN_EMAIL'));
        $team = Team::firstWhere('name', env('SUPER_ADMIN_TEAM'));
        $userHasSuperAdminTeam = $user->whereRelation('teams', 'name', env('SUPER_ADMIN_TEAM'))->first();
        if (! $userHasSuperAdminTeam) {
            $user->teams()->attach($team, ['organisation_id' => $organisationId]);
        }
    }
}
