<?php

namespace Database\Seeders;

use App\Models\Team;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createSuperAdminRolesAndPermissions();
        $this->assignSuperAdminRolesAndPermissions();
    }

    private function createSuperAdminRolesAndPermissions(): void
    {
        if (Role::whereName('Super Admin')->count() === 0) {
            Role::create(['name' => 'Super Admin']);
        }

        $role = Role::whereName('Super Admin')->firstOrFail();

        $permissions = collect([
            'view telescope'
        ]);
        $permissions->each(function ($permission) use ($role) {
            if (Permission::whereName($permission)->count() === 0) {
                Permission::create(['name' => $permission]);
            }

            $role->syncPermissions($permission);
        });

        
    }

    private function assignSuperAdminRolesAndPermissions(): void
    {
        $team = Team::where('name', env('SUPER_ADMIN_TEAM'))->first();
        $user = $team->users()->where('name', env('SUPER_ADMIN_NAME'))->first();
        $role = Role::whereName('Super Admin')->first();
        if (! $user->hasRole($role)) {
            $user->assignRole($role);
        }

        $permission = Permission::where('name', 'view telescope')->first();
        if (! $user->hasPermissionTo($permission)) {
            $user->givePermissionTo($permission);
        }
    }
}
