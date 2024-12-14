import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats: any[] = [];
  isAdmin: boolean = false;

  constructor(private platService: PlatService ,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.fetchPlats();
    this.isAdmin = this.authService.isAdmin(); 
  }
  // Charger les plats
  loadPlats(): void {
    this.platService.getPlats().subscribe((plats) => {
      this.plats = plats;
    });
  }

  fetchPlats(): void {
    this.platService.getPlats().subscribe(
      (data) => {
        this.plats = data;
        console.log('Plats fetched:', this.plats);
      },
      (error) => {
        console.error('Error fetching plats:', error);
      }
    );
  }

  // Méthode pour supprimer un plat
  deletePlat(id: string): void {
    if (this.isAdmin) {  // Vérifier si l'utilisateur est un admin
      if (confirm('Are you sure you want to delete this dish?')) {
        this.platService.deletePlat(id).subscribe(() => {
          this.plats = this.plats.filter(plat => plat.id !== id);  // Met à jour la liste des plats après suppression
        });
      }
    } else {
      alert('You do not have permission to delete this dish.');  // Afficher un message d'erreur
    }
  }
}
