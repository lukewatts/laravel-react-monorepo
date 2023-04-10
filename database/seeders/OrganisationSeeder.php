<?php

namespace Database\Seeders;

use App\Models\Organisation;
use Illuminate\Database\Seeder;

class OrganisationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Organisation::firstOrCreate([
            'name' => env('SUPER_ADMIN_ORGANISATION')
        ]);

        setPermissionsTeamId(Organisation::firstWhere('name', env('SUPER_ADMIN_ORGANISATION'))->id);
    }
}
