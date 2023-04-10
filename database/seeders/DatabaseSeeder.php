<?php

namespace Database\Seeders;

use App\Models\Organisation;
use App\Models\Team;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            OrganisationSeeder::class,
            UserSeeder::class,
            TeamSeeder::class,
            RolesAndPermissionsSeeder::class,
        ]);
    }
}
